class Video{
    constructor(videoMusica, videoPelicula, videoSeries) {
        this._videoMusica = () => videoMusica;
        this._videoPelicula = () => videoPelicula;
        this._videoSeries = () => videoSeries;
    }

    get videoMusica(){
        return this._videoMusica();
    }

    get videoPelicula(){
        return this._videoPelicula();
    }

    get videoSeries(){
        return this._videoSeries();
    }

    mostrarMusica(){
        document.getElementById("musica").innerHTML = `<iframe width="560" height="315" src=${this.videoMusica} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    mostrarPelicula(){
        document.getElementById("peliculas").innerHTML = `<iframe width="560" height="315" src="${this.videoPelicula}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    mostrarSeries(){
        document.getElementById("series").innerHTML = `<iframe width="560" height="315" src="${this.videoSeries}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Musica extends Video{
    constructor(videoMusica, videoPelicula, videoSeries){
        super(videoMusica, videoPelicula, videoSeries);
    }

    mostrarMusica(){
        document.getElementById("musica").innerHTML = `<iframe width="560" height="315" src=${this.videoMusica} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Pelicula extends Video{
    constructor(videoMusica, videoPelicula, videoSeries){
        super(videoMusica, videoPelicula, videoSeries);
    }

    mostrarPelicula(){
        document.getElementById("peliculas").innerHTML = `<iframe width="560" height="315" src="${this.videoPelicula}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Series extends Video{
    constructor(videoMusica, videoPelicula, videoSeries){
        super(videoMusica, videoPelicula, videoSeries);
    }

    mostrarSeries(){
        document.getElementById("series").innerHTML = `<iframe width="560" height="315" src="${this.videoSeries}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

let musica = 'https://www.youtube.com/embed/9Gj47G2e1Jc';
let pelicula = 'https://www.youtube.com/embed/bS5P_LAqiVg';
let serie = 'https://www.youtube.com/embed/s7L2PVdrb_8';

let videoM = new Musica(musica,pelicula,serie);
let videoP = new Pelicula(musica,pelicula,serie);
let videoS = new Series(musica,pelicula,serie);

videoM.mostrarMusica();
videoP.mostrarPelicula();
videoS.mostrarSeries();
