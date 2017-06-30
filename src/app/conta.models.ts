export class Conta {

  public codigo: number

  public descricao: string

  public titulo: string

  public valor: number

  public constructor(codigo:number, descricao:string, titulo:string, valor:number)
  {
    this.codigo = codigo

    this.titulo = titulo

    this.descricao = descricao

    this.valor = valor
  }
}
