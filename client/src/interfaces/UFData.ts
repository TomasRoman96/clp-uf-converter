export interface UFData {
    version:       string;
    autor:         string;
    codigo:        string;
    nombre:        string;
    unidad_medida: string;
    serie:         Serie[];
}

export interface Serie {
    fecha: Date;
    valor: number;
}
