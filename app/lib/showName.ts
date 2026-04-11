export function showName (name : string){
    const splitedName = name.split(' ')
    if (splitedName.length > 2){
        return splitedName[2] + " " + splitedName[3]
    }
    return name
}