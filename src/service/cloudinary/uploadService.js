class UploadService {
  async onFileUpload(imageFile) {
    const formData = new FormData();

    formData.append("file", imageFile);
    formData.append("upload_preset", "yetjvobe");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/drsitopmv/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    return await res.json();
  }
}

export default UploadService;
