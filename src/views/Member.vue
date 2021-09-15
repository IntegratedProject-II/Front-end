<template>
  <div id="member" class="w-full">
    <navBar-layout />
    <content-layout>
      <p class="header text-xl m-8 tablet:m-16">Member</p>

      <div class="  laptop:flex laptop:justify-between laptop:gap-5 m-10 ">
        <!-- dear -->
        <div class="laptop:w-1/3">
          <div class="flex justify-center ">
            <img src="@/assets/member/dear.jpg" class="rounded-3xl w-64 " />
          </div>

          <div class="info p-1 tablet:mx-32 laptop:mx-0  my-5">
            <p class="leading-tight desktop:text-2xl">Yanika Putorn</p>
            <p class="leading-tight">62130500020</p>
            <p class="leading-tight">Back-end, Database</p>
          </div>
        </div>
        <!-- pond -->
        <div class="laptop:w-1/3">
          <div class="flex justify-center ">
            <img src="@/assets/member/pond.jpg" class="rounded-3xl w-64 " />
          </div>

          <div class="info p-1 tablet:mx-32 laptop:mx-0 my-5">
            <p class="leading-tight desktop:text-2xl ">Wanisara Khamracha</p>
            <p class="leading-tight">62130500079</p>
            <p class="leading-tight">DevOps</p>
          </div>
        </div>
        <!-- nurse -->
        <div class="laptop:w-1/3">
          <div class="flex justify-center ">
            <img src="@/assets/member/nurse.jpg" class="rounded-3xl w-64 " />
          </div>

          <div class="info p-1 tablet:mx-32 laptop:mx-0 my-5">
            <p class="leading-tight desktop:text-2xl">Warathaya Rattachai</p>
            <p class="leading-tight">62130500083</p>
            <p class="leading-tight">Front-end</p>
          </div>
        </div>
      </div>
    </content-layout>
  </div>
</template>
<style>
.info {
  color: white;
  background-color: #4d506c;
  border-radius: 9999px;
  text-align: center;

}
</style>
