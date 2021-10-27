
export interface AuthResponse{
    ok: boolean;
    uid?:string;
    usuario?:string;
    token?:string;
    msg?:string;
}

export interface Usuario{
    uid:string,
    usuario:string
}