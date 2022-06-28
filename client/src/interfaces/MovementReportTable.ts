export interface MovementReportArray {
    ID_MOVIMIENTO:         number;
    FECHA:                 string;
    HORA:                  string;
    MONTO:                 number;
    MONTO_CONVERTIDO:      number;
    FECHA_CONVERSION:      string;
    NOMBRE_MONEDA_ORIGEN:  string;
    NOMBRE_MONEDA_DESTINO: string;
}


export interface TableProperties {
    UrlQuery:         string;
}

export interface MovementReport{
    date: string
}
