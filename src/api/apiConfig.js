const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3dbb2472edaaec6c278e65dc4d97a7f2',
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
