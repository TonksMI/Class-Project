function outNode(a, b, c, d, e, f, var1, var2, var, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12)
{
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.e = e;
  this.f = f;
  this.node1 = node(var1, var2, var3, var4, var5, var6);
  this.node2 = node(var7, var8, var9, var10, var11, var12);

  this.fit;
  this.getOutput = function()
  {
    return a * node1.outputNum() + b * node2.outputNum() + c * node3.outputNum() + d * node4.outputNum() + e * node5.outputNum() + f * node6.outputNum();
  }
  this.putFit = function(val)
  {
    this.fit = val;
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

function population ()
{
  this.n1 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n2 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n3 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n4 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n5 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n6 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n7 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n8 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n9 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n10 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));


  this.mean = 0;
  this.std = 5;



  this.remove= function()
  {
    var smallest = 0;
    for(i = 0; i <= 9; i++)
    {
      var temp1 = this.getNextInd(i);
      var temp2 = this.getNextInd(i + 1)
      if(temp1.fit < temp2.fit)
      {
        smallest = i;
      }
    }
    if(smallest == 0)
    {
      this.n2;
    }
    else if (smallest == 1)
    {
      return this.n2;
    }
    else if (smallest == 2) {
      return this.n3;
    }
    else if (smallest == 3) {
      return this.n4;
    }
    else if (smallest == 4) {
      return this.n5;
    }
    else if (smallest == 5) {
      return this.n6;
    }
    else if (smallest == 6) {
      return this.n7;
    }
    else if (smallest == 7) {
      return this.n8;
    }
    else if (smallest == 8) {
      return this.n9;
    }
    else if (smallest == 9) {
      return this.n10;
    }
  }
  this.getNextInd = function (inc)
  {
    if(inc == 0)
    {
      return this.n1;
    }
    else if (inc == 1)
    {
      return this.n2;
    }
    else if (inc == 2) {
      return this.n3;
    }
    else if (inc == 3) {
      return this.n4;
    }
    else if (inc == 4) {
      return this.n5;
    }
    else if (inc == 5) {
      return this.n6;
    }
    else if (inc == 6) {
      return this.n7;
    }
    else if (inc == 7) {
      return this.n8;
    }
    else if (inc == 8) {
      return this.n9;
    }
    else if (inc == 9) {
      return this.n10;
    }
  }
}
