import { Pipe, PipeTransform } from '@angular/core';
import { Unidade } from './unidade';

@Pipe({name: 'unidadesPipe'})
export class UnidadesPipe implements PipeTransform {
  transform(value: Unidade, index: number): any {
    const FIELDS = [
        value.cnpj,
        value.ie,
        value.razao_social,
        value.nome_fantasia,
        value.cod_uni,
        value.nome_contato,
        value.email_contato,
        value.tel_contato,
        value.tel2_contato,
        value.cel_contato,
    ];
    return FIELDS[index];
  }
}
