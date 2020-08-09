import { Target, TextDisplayConfiguration } from '@targets';

export abstract class TargetsDrawer {
    abstract drawTarget(target: Target, textDisplayConfiguration: TextDisplayConfiguration): void;

    abstract deleteTarget(id: string): void;
}
