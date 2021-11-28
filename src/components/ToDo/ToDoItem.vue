<template>
  <div
    :class="['task-preview', { 'task-preview--choose': statusCheck }]"
    @click="statusCheck = !statusCheck"
  >
    <div for="checkbox" class="task-preview__name">
      <p>{{ todo.title }}</p>
    </div>
    <div v-if="statusCheck">Xóa</div>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['todo'],
  data: function () {
    return {
      statusCheck: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";
@import "../../assets/scss/_reset.scss";
@import "../../assets/scss/_common.scss";
@import "../../assets/scss/_todo.scss";

.task-preview {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
  user-select: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.3rem rgba($color-black, 0.4);
  &:hover {
    background-color: $color-brand-3;
    cursor: pointer;
  }
  &__name {
    max-width: calc(100% - 10rem);
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
    p {
      width: 100%;
      position: relative;
      display: inline-block;
      line-height: 150%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:before {
        content: "";
        width: 0%;
        height: 0.1rem;
        position: absolute;
        top: 50%;
        left: 0;
        background-color: $color-silver;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  &--choose {
    background: $color-success;
  }
}
</style>
