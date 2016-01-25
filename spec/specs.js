describe('pingpong', function(){
  it("numbers divisible by 3 are returned with 'ping'", function (){
    expect(ping(5)).to.eql([1,2,ping,4,5]);
  });

  it("numbers divisible by 5 are returned with 'pong'", function (){
    expect(pong(10)).to.eql([1,2,ping,4,'ping','pong',7,8,'ping','pong']);
  });

  it("numbers divisible by 15 are returned with 'pingpong'", function (){
    expect(pinpong(15)).to.eql([1,2,ping,4,'ping','pong',7,8,'ping','pong',11,'ping',13,14,'pingpong']);
  });
});
