import DataBase    from '../../utility/dataBase'
import {cloneDeep} from 'lodash'

/**
 * Base class for all entities.
 * @class Entity
 */
export default class Entity {

    /**
     * @constructor
     * @param entityName {string} The name of the entity.
     */
    constructor(entityName) {
        this.entityName = entityName
    }

    /**
     * Get all
     * @return {Array<Object>}
     */
    static findAll(callBack= () => true) {
        return DataBase
            .getInstance()
            .getEntity(this.ENTITY_TYPE)
            .filter(callBack)
    }

    /**
     * Save entity.
     */
    save() {
        // const entityName = this.entityName
        // const db = DataBase.getInstance()
        // const entity = db.addEntityObject(entityName, this.toJson())
        // return entity

        return DataBase
            .getInstance()
            .addEntityObject(this.entityName, this.toJson())
    }

    /**
     * Export entity to json.
     */
    toJson() {
        let object = {}

        Object.keys(this).forEach(key => {
            if (key !== 'entityName') {
                object[key] = cloneDeep(this[key])
            }
        })

        return object
    }
}
