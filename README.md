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
