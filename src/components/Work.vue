<template>
  <div class="p-6 w-full h-full">
    <p class="text-4xl text-left uppercase text-trueGray-700">
      work
    </p>
    <!-- pickups -->
    <div class="flex mt-10">
      <div class="w-1/8 pr-6 text-right border-r border-trueGray-300 timeline-block">
        2021.03
      </div>
      <div class="w-5/6 ml-6">
        <p class="text-2xl text-left uppercase text-trueGray-800">
          pick-ups
        </p>
        <div class="flex w-full md:flex-col mt-6">
          <div class="w-1/2 pr-4 md:w-full leading-loose">
            透過PICKUPS讓打球更容易<br>立即組隊 即刻開打 競爭較量 保存勝負<br>你，隨時準備上場<br>你，永遠知道下一場在哪
            <div class="mt-6">
              <a
                href="https://pickups-web.netlify.app/"
                class="w-full p-1 text-white bg-orange-400 uppercase"
              >link</a>
            </div>
          </div>
          <img
            src="@/assets/img/pickups.png"
            class="w-1/2 object-contain lg:w-full shadow-xl"
          >
        </div>
      </div>
    </div>
    <!-- xmas -->
    <div class="flex mt-10">
      <div class="w-1/8 pr-6 text-right border-r border-trueGray-300 timeline-block">
        2020.10
      </div>
      <div class="w-5/6 ml-6">
        <p class="text-2xl text-left uppercase text-trueGray-800">
          xmas
        </p>
        <div class="flex w-full md:flex-col mt-6">
          <div class="w-1/2 pr-4 md:w-full leading-loose">
            透過簡單的掃描 QR code 和答題小任務找到小精靈和獲得耶誕幣！累積的耶誕幣還能在新北耶誕城期間兌換抽獎資格
            <div class="mt-6">
              <a
                href="https://find-elves.netlify.app/"
                class="w-full p-1 text-white bg-orange-400 uppercase"
              >link</a>
            </div>
          </div>
          <img
            src="@/assets/img/find-elves.png"
            class="w-1/2 object-contain lg:w-full shadow-xl"
          >
        </div>
      </div>
    </div>
    <!-- reservamor-platform -->
    <div class="flex mt-10">
      <div class="w-1/8 pr-6 text-right border-r border-trueGray-300 timeline-block">
        2021.03
      </div>
      <div class="w-5/6 ml-6">
        <p class="text-2xl text-left uppercase text-trueGray-800">
          Reservamor Platform
        </p>
        <div class="flex w-full md:flex-col mt-6">
          <div class="w-1/2 pr-4 md:w-full leading-loose">
            Due to the COVID19, the city's Cultural Bureau decided to make the festival online. The web contains information like quotes from books and descriptions and images of the authors. The main purpose is to let the public to join the festival virtually when the world is facing the pandemic.
          </div>
          <img
            src="@/assets/img/example.png"
            class="w-1/2 object-contain lg:w-full shadow-xl"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work'
}
</script>

<style scoped>
.image-w {
  width: 700px;
}
.timeline-block::after {
  content: "";
  position: relative;
  top: -13px;
  right: -80px;
  display: block;
  width: 6px;
  height: 6px;
  background-color: rgba(187,30,30,.8);
}
</style>
