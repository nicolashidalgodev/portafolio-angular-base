export interface Info {
    titulo?:         string;
    email?:          string;
    nombre_corto?:   string;
    pagina_autor?:   string;
    facebook?:       string;
    instagram?:      string;
    twitter?:        string;
    tumblr?:         string; 
    equipo?:         Equipo[];
}

export interface Equipo {
    bio?:    string;
    cargo?:  string;
    link?:   string;
    nombre?: string;
    url?:    string;
}
 