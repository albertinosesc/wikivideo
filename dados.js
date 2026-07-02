// BANCO DE DADOS ACESSO COMPARTILHADO
const musicDatabase = [
    { 
        id: 1, 
        title: "A Casa", 
        composer: "Vinicius de Moraes / Toquinho", 
        book: "Arca de Noé", 
        pdfUrl: "partituras/a_casa.pdf", 
        youtubeUrl: "https://www.youtube.com/watch?v=K3DEgVGA0Gs&list=RDK3DEgVGA0Gs&start_radio=1",
        mp3Url: "https://archive.org/details/the-matador-bastien-piano-basics-3"  // LINK DIRETO
    },
    { 
        id: 2, 
        title: "O Caderno", 
        composer: "Toquinho", 
        book: "Música na Infância Vol. 1", 
        pdfUrl: "partituras/o_caderno.pdf", 
        youtubeUrl: "https://www.youtube.com/watch?v=_0mpldsbZdc",
        mp3Url: "https://archive.org/download/the-matador-bastien-piano-basics-3/The%20Matador_Bastien%20Piano%20Basics%203.mp3"  // LINK DIRETO
    }
];
d
// Função auxiliar para extrair o ID do YouTube
function getYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}


