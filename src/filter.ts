import { _BITSET, Bitset } from "./bitset";
import ComponentManager from './component-manager';
import { EntityQuery } from './types';

export default class Filter {

    /**
     * @param inclusions bits that must be included
     * @param exclusions not allowed bits
     */
    constructor(
        readonly inclusions = new _BITSET(),
        readonly exclusions = new _BITSET()
    ) {}

    /**
     * Returns ``true`` if the getCompositionId satisfies this filter
     *
     * @param compositionId
     */
    check(compositionId: Bitset): boolean {
        return this.inclusions.and(compositionId).equals(this.inclusions)
            && this.exclusions.and(compositionId).isEmpty();
    }

    /**
     * Returns ``true`` if a filter is equal to this one
     *
     * @param filter
     */
    equals(filter: Filter): boolean {
        return this.inclusions.equals(filter.inclusions)
            && this.exclusions.equals(filter.exclusions);
    }

    static create(componentManager: ComponentManager, query: EntityQuery = {}): Filter {
        return new Filter(
            componentManager.createCompositionId(query.contains || []),
            componentManager.createCompositionId(query.excludes || []),
        );
    }

}
