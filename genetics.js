function outNode(a, b, c, d, e, f, var1, var2, var, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13, var14, var15, var16, var17, var18, var19, var20, var21, var22, var23, var24, var25, var26, var27, var28, var29, var30, var31, var32, var33, var34, var35, var36) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.e = e;
  this.f = f;
  this.node1 = node(var1, var2, var3, var4, var5, var6);
  this.node2 = node(var7, var8, var9, var10, var11, var12);
  this.node3 = node(var13, var14, var15, var16, var17, var18);
  this.node4 = node(var19, var20, var21, var22, var23, var24);
  this.node5 = node(var25, var26, var27, var28, var29, var30);
  this.node6 = node(var31, var32, var33, var34, var35, var36);

  this.getOutput = function()
  {
    return a * node1.outputNum() + b * node2.outputNum() + c * node3.outputNum() + d * node4.outputNum() + e * node5.outputNum() + f * node6.outputNum();
  }
}
function node(var1, var2, var3, var4, var5, var6) {
  this.a = var1;
  this.b = var2;
  this.c = var3;
  this.d = var4;
  this.e = var5;
  this.f = var6;

  this.outputNum = function()
  {
    return a * Ball.x + b * Ball.y + c * Ball.x_speed + d * Ball.y_speed + e * Player.x + f * Player.y;
  }
}

var GaussianDist = function(mean, std)
{
  var temp1 = Math.sqrt(2 * Math.exp(1.0 / Math.random()));
  var temp2 = Math.cos(2 * 3.14 * Math.random());
  return temp1 * temp2;
}
