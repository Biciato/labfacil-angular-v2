import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <div id="sidenav">
        <ul>
            <li *ngFor="let menuButton of sidenavMenuButtons; let e = index" class="menuOut">
                <i class="{{ return_icons_names(e) }}"></i><span>{{ menuButton }}</span>
                <div [ngSwitch]="menuButton">
                <ul *ngSwitchCase="'Rotina Diária'" id="rd" class="sidenavMenuUl">
                    <li *ngFor="let insideMenuButton of  sidenavRDButtons" class="menuIn"><span>{{ insideMenuButton }}</span></li>
                </ul>
                <ul *ngSwitchCase="'Cadatro'" id="cad" class="sidenavMenuUl">
                    <li *ngFor="let insideMenuButton of  sidenavCadButtons" class="menuIn"><span>{{ insideMenuButton }}</span></li>
                </ul>
                <ul *ngSwitchCase="'Faturamento'" id="fat" class="sidenavMenuUl">
                    <li *ngFor="let insideMenuButton of  sidenavFatButtons" class="menuIn"><span>{{ insideMenuButton }}</span></li>
                </ul>
                <ul *ngSwitchCase="'Relatórios'" id="rel" class="sidenavMenuUl">
                    <li *ngFor="let insideMenuButton of  sidenavRelButtons" class="menuIn"><span>{{ insideMenuButton }}</span></li>
                </ul>
                <ul *ngSwitchCase="'Administrativo'" id="adm" class="sidenavMenuUl">
                    <li *ngFor="let insideMenuButton of  sidenavADMButtons" class="menuIn"><span>{{ insideMenuButton }}</span></li>
                </ul>
                <div *ngSwitchDefault></div>
                </div>
            </li>
        </ul>
    </div>
  `,
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit  {
  sidenavMenuButtons: Array<string>;
  sidenavIcons: Array<string>;
  sidenavRDButtons: Array<string>;
  sidenavCadButtons: Array<string>;
  sidenavFatButtons: Array<string>;
  sidenavRelButtons: Array<string>;
  sidenavADMButtons: Array<string>;
  menuButtonSelected: string;

  tabs: any;

  constructor() {
    this.sidenavMenuButtons = ['Rotina Diária', 'Cadatro', 'Faturamento', 'Relatórios', 'Administrativo'];
    this.sidenavIcons = ['fas fa-tasks', 'far fa-edit', 'fas fa-money-check-alt', 'fas fa-clipboard-list', 'fas fa-briefcase'];
    this.sidenavRDButtons = ['Atendimento', 'Prontuário | Histórico', 'Recebimento de Material | Triagem',
     'Lançamento de Resultados', 'Situação de Atendimento', 'Consultar Preços'];
    this.sidenavCadButtons = ['Paciente', 'Médicos', 'Exames', 'CID', 'Laboratórios de Apoio', 'Equipamentos'];
    this.sidenavFatButtons = ['Caixa Particular', 'Faturamento', 'Repasse Médico', 'Recibos', 'Notas Fiscais'];
    this.sidenavRelButtons = ['Dashboard - Resumo Geral', 'Previsão de Faturamento por Convênio', 'Previsão de Repasse Médicos',
     'Produtividade Médicos', 'Exames por paciente', 'Preços por Exame', 'Pendências de Atendimento',
     'Comparação Tabelas de Preços / Faturamento',
      'Atendimento Realizados X Recebidos', 'Autorização de guias', 'Previsão de Faturamento por Guia', 'Previsão de Faturamento por Dia',
      'Estatísticas Exames Realizados', 'Estatísticas por Convênio Sintético'];
    this.sidenavADMButtons = ['Unidades', 'Postos de Coleta', 'Materiais de Coleta', 'Listar Usuários', 'Novos Usuários'];
  }

  ngOnInit() {
    this.tabs = [
      { title: 'Unidades'},
      { title: 'Postos de Coleta'},
      { title: 'Faturamento'},
      { title: 'Usuários'},
      { title: 'Horários'},
      { title: 'Documentos'},
    ];
  }

  return_icons_names(index) {
    return this.sidenavIcons[index];
  }
}


