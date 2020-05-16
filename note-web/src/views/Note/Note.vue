<template>
  <div id="note">
    <h1>Note</h1>
  </div>
</template>

<script>
export default {
  name: "Note",
};
</script>

<style scoed>
#note {
  width: 80%;
  min-width: 769px;
  margin: auto;
}
#note h1 {
  font-size: 36px;
  color: #424141;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.note-box {
  margin: auto;
  margin-bottom: 10px;
}
.status {
  display: flex;
  width: 520px;
  margin: auto;
  justify-content: space-between;
  padding: 0 10px;
  color: #bababa;
  font-size: 18px;
}
.btn-edit {
  cursor: pointer;
}
.btn-edit.is-edit {
  color: #424141;
}
</style>
