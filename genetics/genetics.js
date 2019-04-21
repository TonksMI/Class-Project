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
  this.n1 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));
  this.n2 = outNode(GaussianDist(0, 5), GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5),GaussianDist(0, 5));

  this.mean = 0;
  this.std = 5;


  this.setFitnessN1 = function (fit)
  {
    this.n1.fit = fit;
  }
  this.setFitnessN2 = function (fit)
  {
    this.n2.fit = fit;
  }
  this.remove= function()
  {
    if(this.n1.fit < this.n2.fit)
    {
      this.n1 = outNode outNode(GaussianDist(this.n2.a, 5), GaussianDist(this.n2.b, 5),GaussianDist(this.n2.c, 5),GaussianDist(this.n2.d, 5),GaussianDist(this.n2.e, 5),GaussianDist(this.n2.f, 5),GaussianDist(this.n2.node1.a, 5),GaussianDist(this.n2.node1.b, 5),GaussianDist(this.n2.node1.c, 5),GaussianDist(this.n2.node1.d, 5),GaussianDist(this.n2.node1.e, 5),GaussianDist(this.n2.node1.f, 5),GaussianDist(this.n2.node2.a, 5),GaussianDist(this.n2.node2.b, 5),GaussianDist(this.n2.node2.c, 5),GaussianDist(this.n2.node2.d, 5),GaussianDist(this.n2.node2.e, 5),GaussianDist(this.n2.node2.f, 5));
    }
    else {
      this.n2 = outNode outNode(GaussianDist(this.n1.a, 5), GaussianDist(this.n1.b, 5),GaussianDist(this.n1.c, 5),GaussianDist(this.n1.d, 5),GaussianDist(this.n1.e, 5),GaussianDist(this.n1.f, 5),GaussianDist(this.n1.node1.a, 5),GaussianDist(this.n1.node1.b, 5),GaussianDist(this.n1.node1.c, 5),GaussianDist(this.n1.node1.d, 5),GaussianDist(this.n1.node1.e, 5),GaussianDist(this.n1.node1.f, 5),GaussianDist(this.n1.node2.a, 5),GaussianDist(this.n1.node2.b, 5),GaussianDist(this.n1.node2.c, 5),GaussianDist(this.n1.node2.d, 5),GaussianDist(this.n1.node2.e, 5),GaussianDist(this.n1.node2.f, 5));
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
  }
}
