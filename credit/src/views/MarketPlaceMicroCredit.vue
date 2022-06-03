<template>
  <credit-header/>
  <div class="container credit-procedure">
    <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
      <router-link to="/micro-credit-procedure" class="header_history_url_main">Кредит хизматлари</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
      <span class="header_history_url">Маркет плейс кредитлаш тартиби</span>
    </div>
    <div class="micro_credit_law">
      <b>“Агробанк” АТБ филиаллари томонидан жисмоний шахсларга микроқарз бериш тартиби</b><br>
      <b>(Янги таҳрирда)</b>
    </div>
    <div>
      <table class="table">
        <thead>
        <tr>
          <th style="width: 6%">№</th>
          <th style="width: 30%">Кредитлаш шартлари</th>
          <th style="width: 64%">Жорий этилмоқда</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="table-number">1</td>
          <td>Қабул қилган орган, Тартиб рақами ва санаси:</td>
          <td>18.02.2022 йил 6/1 Бошқарув қарорига асосан 7-сон билан рўйхатга олинган.</td>
        </tr>
        <tr>
          <td class="table-number">2</td>
          <td>Микроқарз ажратиладиган субъект</td>
          <td>Доимий даромад манбаига эга бўлган жисмоний шахсларга (Қарз юки, тўлов интизоми тўлов қобилияти ҳисобга олинади).</td>
        </tr>
        <tr>
          <td class="table-number">3</td>
          <td>Кредит миқдори</td>
          <td>-50 млгн.сўмгача
            бунда ойлик тўлов суммаси қарз олувчи ва биргаликда қарз олувчи (кўпи билан 1 нафар) нинг қарз юкининг 50 фоизидан ошмаслиги лозим.
          </td>
        </tr>
        <tr>
          <td class="table-number">5</td>
          <td>Кредит мақсади ва усули</td>
          <td>Мақсадсиз, мижознинг Агробанкдан очилган пластик картасига ўтказилади.(Тилла буюмлари гарови асосида нақд пул шаклида)
          </td>
        </tr>
        <tr>
          <td class="table-number">6</td>
          <td>Имтиёзли давр (кредитнинг асосий қисмини қайтариш графига бўйича)</td>
          <td>-Имтиёзли давр мавжуд эмас,
            -график Оддий (дифференциал) усулда.
          </td>
        </tr>
        <tr>
          <td class="table-number">7</td>
          <td>Кредит таъминоти</td>
          <td>30 млн.сўмгача
            -Суғурта полиси;
            -Учинчи шахс кафиллиги;
            50 млн.сўмгача
            -Ликвидлик мол мулк-гарови.
          </td>
        </tr>
        <tr>
          <td class="table-number">8</td>
          <td>Тақдим этиладиган ҳужжатлар</td>
          <td>а) паспорт ёки ID карта;
            б) ушбу ҳужжатларга қўшимча равишда банк ходими томонидан қарз олувчининг доимий иш жойидан сўнги 6 ой давомида олган ойлик даромади махсус тармоқлар орқали электрон тарзда олинади ҳамда таҳлил қилинади.
            <i>а ва б банддаги ҳужжатлар биргаликда қарз олувчи ва кафиллардан ҳам талаб қилинади</i>.
          </td>
        </tr>
        <tr>
          <td class="table-number">9</td>
          <td>Кредитни қайтариш тартиби.</td>
          <td>   -Кредит фоизлари ва график бўйича ҳар ойлик тўловлар кредит берилган санадан қатъий назар ҳар ойнинг <b>5 санасидан кечикмаган ҳолда</b> тўланиши лозим.
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <credit-footer/>
</template>
<style>

.credit-procedure{
  margin-bottom: 14px;
  font-family: "Times New Roman";
  font-size: 18px;
}
.credit-procedure th, .table-number{
  text-align: center;
  flex-direction: column;
}
.credit-procedure table, th, td {
  border: 1px solid black;
}
.micro_credit_law{
  text-align: center;
  font-size: 20px;
  margin: 24px 0px 24px 0px;
}
</style>
