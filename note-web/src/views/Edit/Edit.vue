<template>
  <div id="edit">
    <h1>Edit Note</h1>
  </div>
</template>

<script>
export default {
  name: "Edit",
};
</script>

<style scoped>
h1 {
  color: #424141;
  font-size: 36px;
}
.container {
  margin: auto;
  margin-top: 30px;
  width: 600px;
  border-radius: 32px;
  box-shadow: 0 2px 7px 0 #e8e8e8;
  background-color: #ffffff;
  padding: 20px 60px;
}
.container > p, .type-wrapper > p {
  text-align: left;
  font-size: 24px;
  color: #424141;
}
.type-wrapper {
  display: flex;
  margin: 15px 0;
}
.action {
  text-align: right;
}
.action .btn:first-child {
  margin-right: 16px;
}
.input-control {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #bababa;
  padding: 0 10px;
  font-size: 24px;
  color: #424141;
}
.input-control:focus,
.textarea-control:focus {
  border: solid 1px #1782ff;
}
.textarea-control {
  width: 100%;
  height: 160px;
  border-radius: 4px;
  border: solid 1px #bababa;
  background-color: #ffffff;
  padding: 10px;
  font-size: 20px;
  color: #424141;
}
.btn {
  width: 94px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #1782ff;
  background-color: #ffffff;
  color: #1782ff;
  font-size: 15px;
  font-weight: bold;
}
.btn.btn-save {
  background-color: #1782ff;
  color: #ffffff;
}
.is-danger {
  color: red;
  text-align: left;
}

.radio-wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 10px;
}
.radio-wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.radio-wrapper .check {
  position: absolute;
  top: 5px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border: 1px solid #bababa;
  border-radius: 50%;
}
.radio-wrapper:hover input ~ .check {
  background-color: #ccc;
}
.radio-wrapper input:checked ~ .check {
  background-color: #ffffff;
  border-color: #2196F3;
}
.check:after {
  content: "";
  position: absolute;
  display: none;
}
.radio-wrapper input:checked ~ .check:after {
  display: block;
}
.radio-wrapper .check:after {
  top: 4px;
	left: 4px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #2196F3;
}
</style>
