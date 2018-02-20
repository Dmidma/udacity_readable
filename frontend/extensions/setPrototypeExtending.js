/**
 * This file contains an extesion for the ECS6 Set structure.
 *
 * The `.equals()` function will allow to compare two sets.
 */


if (Set.prototype.equals)
    console.warn("Overriding existing Set.prototype.equals.")


Set.prototype.equals = function(set) {
    if (!set || set.length !== this.length) return false
    
    for (let element of this)
        if (!set.has(element))
            return false

    return true
}

