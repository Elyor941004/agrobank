<template>
  <credit-header/>
  <div class="container credit-procedure">
    <div class="header_history_link" style="display: flex; justify-content: flex-start !important;">
      <router-link to="/avto-credit-service" class="header_history_url_main">Кредит хизматлари</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;
      <span class="header_history_url">Автокредитлаш тартиби</span>
    </div>
    <div class="micro_credit_law">
      <b>Агробанк томонидан жисмоний шахсларга Автокредит ажратиш бўйича таклиф этилган тартиб</b>
    </div>
    <div>
      <table class="table">
        <thead>
        <tr>
          <th style="width: 6%">№</th>
          <th style="width: 30%">Кредитлаш шартлари</th>
          <th style="width: 64%">Амалда</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="table-number">1</td>
          <td>Қабул қилган орган, Тартиб рақами ва санаси:</td>
          <td></td>
        </tr>
        <tr>
          <td class="table-number">2</td>
          <td>Автокредит ажратиладиган субъект</td>
          <td>Доимий даромад манбаига эга бўлган жисмоний шахс</td>
        </tr>
        <tr>
          <td class="table-number">3</td>
          <td>Кредит миқдори</td>
          <td>Сотиб олинаётган автотранспорт воситаси қийматининг 75 фоизи миқдорида белгиланади. Автотранспорт воситаси қийматининг 25 фоизи мижоз томонидан бошланғич бадал сифатида топширилган маблағ ҳисобидан ўтказилади.
            Бунда қарз олувчи ва биргаликда қарз олувчи (кўпи билан 2 нафар) нинг барча кредитлари (асосий қарзи ва ҳисобланган фоизлар) учун бир ойлик кредит тўловлари ўртача ойлик даромадининг (солиқ тўловлари ва мажбурий ажратмалар чегирилгандан сўнг) 50 фоизидан ошмаслиги лозим.
          </td>
        </tr>
        <tr>
          <td class="table-number">4</td>
          <td>Кредит муддати,бошланғич тўлови ва фоиз ставкаси</td>
          <td>1 йилга, фоиз ставкаси 24%
            2 йилга, фоиз ставкаси 25%
            3 йилга, фоиз ставкаси 26%
            4 йилга, фоиз ставкаси 27%
          </td>
        </tr>
        <tr>
          <td class="table-number">5</td>
          <td>Кредит мақсади ва усули</td>
          <td>Ўзбекистон Республикасида ишлаб чиқарилган автотранспорт воситасини дилерлик компаниясидан ёки реализация қилувчи ташкилотдан сотиб олиш учун пул кўчириш йўли билан ажратилади
          </td>
        </tr>
        <tr>
          <td class="table-number">6</td>
          <td>Имтиёзли давр (кредитнинг асосий қисмини қайтариш графига бўйича)</td>
          <td>Имтиёзли давр мавжуд эмас, график Аннуитет усулда.</td>
        </tr>
        <tr>
          <td class="table-number">7</td>
          <td>Кредит таъминоти</td>
          <td>-автотранспорт воситаси етказилгунга қадар автомашина олди-сотди шартномасидаги суммадан бошланғич бадал суммаси чегирилган ҳолда кредитнинг тўлиқ қиймати ва муддатига кредит қайтмаслиги хатарини суғурта қилинганлиги тўғрисида суғурта полиси ёки вақтинчалик таъминот турларидан бири;
            -Автокредит ҳисобига сотиб олинадиган автомашина.
          </td>
        </tr>
        <tr>
          <td class="table-number">8</td>
          <td>*Тақдим этиладиган ҳужжатлар</td>
          <td>а) ариза
            б) паспорт ёки унинг ўрнини босувчи ҳужжат;
            в) ишлаб чиқарувчининг расмий дилери билан тузилган автомашина олди-сотди шартномаси ва счет-фактура (автомашина олинганидан сўнг);
            г) автотранспорт воситаси етказилгунга қадар автомашина олди-сотди шартномасидаги суммадан бошланғич бадал суммаси чегирилган ҳолда кредит қайтмаслиги хатарини суғурта қилинганлиги тўғрисида суғурта полиси ёки вақтинчалик таъминот турларидан бири;
            д) ушбу ҳужжатларга қўшимча равишда банк ходими томонидан қарз олувчи ва биргаликда қарз олувчи жисмоний шахсларнинг доимий иш жойидан сўнги 12 ой давомида олган ойлик даромади (солиқ тўловлари ва мажбурий ажратмалар миқдори кўрсатилган ҳолда) махсус тармоқлар орқали электрон тарзда олинади ҳамда таҳлил қилинади.
            б ва д банддаги ҳужжатлар биргаликда қарз олувчилардан ҳам талаб қилинади.
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
