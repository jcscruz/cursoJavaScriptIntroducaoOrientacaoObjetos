import {Cliente} from "./Cliente.js"

export class ContaCorrente{
	_agencia
	_saldo = 0
	_cliente
	static numeroDeContas = 0
	
	get cliente(){
		return this._cliente
	}
	
	set cliente(novoValor){
		if(novoValor instanceof Cliente)
		{
			this._cliente = novoValor
		}					
	}
	
	
	get saldo(){
		return this._saldo
	}

	constructor(agencia, cliente){
		this._agencia = agencia
		this._cliente = cliente
		ContaCorrente.numeroDeContas += 1
	}

	sacar(valor){
		if(valor >= valor){
			this._saldo -= valor	
			return valor
		}				
	}
	
	depositar(valor){
		if(valor > 0){
			this._saldo += valor
		}
	}

	transferir(valor, conta){
		const valorSacado = this.sacar(valor)
		conta.depositar(valorSacado)
	}


}