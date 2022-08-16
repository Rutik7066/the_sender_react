

export async function toFile( file){
    const f = await file.arrayBuffer()
    console.log(file.name)
    return {
        name : file.name,
        array : f
    }

}   