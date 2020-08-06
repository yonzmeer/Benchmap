import { Billboard, BillboardCollection, Viewer } from 'cesium';

export interface ImageCollectionParams {
    viewer: Viewer;
}

type PBillboard = Partial<Billboard>;

export function createImageCollection({
    viewer
}: ImageCollectionParams): ImageCollection {
    return new ImageCollection(viewer);
}

export class ImageCollection {
    private idToBillboard: Map<string, Billboard>;
    private billboardCollection: BillboardCollection;

    constructor(private viewer: Viewer) {
        this.idToBillboard = new Map();
        this.billboardCollection = viewer.scene.primitives.add(new BillboardCollection());
    }

    add(id: string, billboard: PBillboard): Billboard {
        if (this.has(id)) {
            return this.update(id, billboard);
        }

        const newBillboard = this.billboardCollection.add(billboard);
        this.idToBillboard.set(id, newBillboard);

        return newBillboard;
    }

    remove(id: string): boolean {
        const billboard = this.idToBillboard.get(id);
        if (!billboard) {
            return false;
        }

        this.idToBillboard.delete(id);
        this.billboardCollection.remove(billboard);
    }

    has(id: string): boolean {
        return this.idToBillboard.has(id);
    }

    get(id: string): Billboard {
        return this.idToBillboard.get(id);
    }

    private update(id: string, billboard: PBillboard): Billboard {
        const existingBillboard = this.get(id);
        Object.keys(billboard).filter(key =>
            JSON.stringify(billboard[key] === JSON.stringify(existingBillboard[key]))
        ).forEach(key => existingBillboard[key] = billboard[key]);

        return existingBillboard;
    }
}
