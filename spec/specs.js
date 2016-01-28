describe('pingPong', function(){
  it("numbers divisible by 3 are returned with 'ping'", function (){
    expect(pingPong(3)).to.eql([1,2,'ping']);
  });

  it("numbers divisible by 5 are returned with 'pong'", function (){
    expect(pingPong(5)).to.eql([1,2,'ping',4,'pong']);
  });

  it("numbers divisible by 15 are returned with 'pingpong'", function (){
    expect(pingPong(15)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong']);
  });
});
