import { assignEntityQueryDecorator } from './decorators';

export { default as BaseSystem } from './base-system';
export { default as Bootable } from './bootable';
export { default as ComponentManager } from './component-manager';
export { default as ComponentMapper } from './component-mapper';
export { default as ComponentSystem } from './component-system';
export { default as EntityManager } from './entity-manager';
export { default as EntityPool } from './entity-pool';
export { default as EntitySystem } from './entity-system';
export { default as Filter } from './filter';
export { default as ProcessingSystem } from './processing-system';
export { default as SystemType } from './system-type';
export { default as World } from './world';
export * from './types';
export * from './utils';

export const entityQuery = assignEntityQueryDecorator;
