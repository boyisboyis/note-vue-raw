<template>
  <NoteBox>
    <div id="add-note">
    </div>
  </NoteBox>
</template>
<script>
export default {
  name: "AddNote",
};
</script>
<style scoped>
#add-note {
  display: flex;
}
.icon {
  line-height: 62px;
  margin-right: 12px;
  color: #808080;
}
input {
  border: none;
  width: 100%;
  height: 62px;
  font-size: 1.5rem;
}
input::placeholder {
  color: #808080;
  font-size: 1.5rem;
  line-height: 62px;
}
</style>
