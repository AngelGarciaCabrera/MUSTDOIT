// supabaseFunctions.js
import { v4 as uuidv4 } from 'uuid';
import supaConetion from './supabaseConfi';

export const uploadImage = async (file, userId, setImageUrl, getMedia) => {
  if (!file || !userId) return;

  try {
    // Subir la imagen a Supabase Storage
    const { data, error } = await supaConetion
      .storage
      .from('test')
      .upload(`${userId}/${uuidv4()}`, file);

    if (error) {
      console.error("Error subiendo archivo:", error.message);
      return;
    }

    if (data) {

      const publicUrl = `${supaConetion.storageUrl}/object/public/test/${data.path}`;
      setImageUrl(publicUrl); // Actualizar la imagen en el estado

      // Actualizar la foto del usuario en la tabla 'user'
      const { error: updateError } = await supaConetion
        .from('user')
        .update({ photo: publicUrl })
        .eq('id', userId);

      if (updateError) {
        console.error("Error actualizando usuario:", updateError.message);
        return;
      }

      console.log('Imagen subida correctamente');
      // Recargar los medios del usuario
      getMedia(userId);
    }
  } catch (error) {
    console.error("Error en la subida:", error);
  }
};



//optener imagenes 

export const getMedia = async (userId, setImageUrl) => {
  const { data, error } = await supaConetion
    .storage
    .from('test')
    .list(`${userId}/`, {
      limit: 10,
      offset: 0,
      sortBy: { column: 'created_at', order: 'desc' }, // Ordenar por fecha de creación de forma descendente
    });

  if (data) {
    if (data.length > 0) {
      //oedenaer por fecha
      const lastImage = data[0]; // El primer elemento será la última imagen subida
      const publicUrl = `${supaConetion.storageUrl}/object/public/test/${userId}/${lastImage.name}`;
      setImageUrl(publicUrl); // Actualizar la imagen en el estado
    }
    return data;
  } else {
    console.error("Error obteniendo medios:", error);
  }
};


//optener user

export const  getEntity = async(tablaName,id,setUser)=>{
  const { data, error } = await supaConetion
  .from(tablaName)
  .select('*') 
  .eq('id', id)  
  .single(); 

if (error) {
  console.error('Error obteniendo usuario:', error.message);
  return;
}
console.log("Usuario obtenido:", data);
setUser(data);
}