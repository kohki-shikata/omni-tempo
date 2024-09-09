<template>
  <form class="[&>*]:mb-6">
    <label class="form-control w-full">
      <div class="label mb-2">
        <span class="label-text">Project title</span>
      </div>
      <input type="text" placeholder="Type here" class="input input-bordered w-3/5" />
    </label>
    <label class="form-control">
      <div class="label mb-2">
        <span class="label-text">Description</span>
      </div>
      <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
    </label>
    <fieldset>
      <legend class="mb-2"> Metrics <div class="tooltip"
          data-tip="Metrics you entered here will be converted as each radar chats' axis.">
          <p
            class="rounded-full bg-black text-slate-600 aspect-square inline-flex items-center justify-center min-h-[1.2em] min-w-[1.2em]">
            ?</p>
        </div>
      </legend>
      <div class="megrics-item flex flex-row gap-2">
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="" />
        </label>
        <button type="button" class="btn">Add</button>
        <button type="button" class="btn">Remove</button>
      </div>
    </fieldset>
    <label class="form-control">
      <div class="label mb-2">
        <span class="label-text">Default chart color</span>
      </div>
      <input type="color" class="input input-bordered w-1/5" />
    </label>
    <fieldset class="form-control">
      <legend class="mb-2">Evaluation method</legend>
      <div class="grid grid-flow-col auto-cols-auto gap-4">
        <label
          class="label cursor-pointer justify-start gap-3 border border-slate-600 px-4 py-3 min-w-[10em] rounded-md hover:bg-slate-500">
          <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked="true" />
          <span class="label-text">Total</span>
        </label>
        <label
          class="label cursor-pointer justify-start gap-3 border border-slate-600 px-4 py-3 min-w-[10em] rounded-md hover:bg-slate-500">
          <input type="radio" name="radio-10" class="radio checked:bg-red-500" />
          <span class="label-text">Area</span>
        </label>
        <label
          class="label cursor-pointer justify-start gap-3 border border-slate-600 px-4 py-3 min-w-[10em] rounded-md hover:bg-slate-500">
          <input type="radio" name="radio-10" class="radio checked:bg-red-500" />
          <span class="label-text">Average</span>
        </label>
      </div>
    </fieldset>
  </form>
</template>