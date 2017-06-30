import { Component } from '@angular/core';
import { Conta } from './conta.models';

@Component({
  selector: 'my-app',
  template: '<html><head><title>Teste do Site Angular</title></head><body>testando o site!!</body></html>',
})
//'app/app.component.html'
export class AppComponent {
  private _contas:Array<Conta> = [
    {
      codigo:1,
      descricao: "Minha conta do Itau",
      titulo:"Banco Itau",
      valor: 1.500
    },
    new Conta( 2, "Minha conta no Itau Empresas", "Itau Empresa", 750.00)
  ]

  private _nextId = 3

  private CriarConta(desc: any, tit:any, val:any) {
    this._contas.push(
                 new Conta (
                            this._nextId,
                            desc.value,
                            tit.value,
                            val.value
                           )
                    )
    this._nextId++
    desc.value = ""
    tit.value = ""
    val.value = 0
  }

  private removeConta(index:number){
    this._contas.splice(index, 1)
  }
}
