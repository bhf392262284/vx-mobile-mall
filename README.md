# 以下是商城 h5 地址

https://linjiashop.microapp.store/#/index

# 以下是 vant 框架地址

https://youzan.github.io/vant-weapp/#/intro

<div class="Edition" v-for="(item,index) in skuTree" :key="index">
  <p>{{item.k}}</p>
  <div>
    <p
      :class="{styleColor:skuTree[index].v[s].color}"
      v-for="(i,s) in item.v"
      :key="s"
      @click="selectColor(index, s)"
    >{{i.name}}</p>
  </div>
</div>

selectColor(i, s) {
for (let j = 0; j < this.skuTree[i].v.length; j++) {
this.skuTree[i].v[j].color = false;
}
this.skuTree[i].v[s].color = !this.skuTree[i].v[s].color;
}

// 给按钮加 color 属性用来控制 class 显示隐藏
for (let i = 0; i < newTree.length; i++) {
for (let j = 0; j < newTree[i].v.length; j++) {
newTree[i].v[j].color = false;
}
}

// 验证是否选择了商品规格或颜色
verifyProductSelection() {
let s = 0;
for (let i = 0; i < this.skuTree.length; i++) {
for (let m = 0; m < this.skuTree[i].v.length; m++) {
if (this.skuTree[i].v[m].color === false) {
s++;
}
}
if (s == 2) {
Toast({
message: "请先选择商品" + this.skuTree[i].k,
duration: 1500
});
break;
}
}
if (s === 2) {
return false;
} else {
return true;
}
}
