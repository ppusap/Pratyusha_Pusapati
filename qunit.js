
function avg(s1,s2,s3)
{
    if (typeof s1 === "string" && typeof s2 === "string" && typeof s3 === "string") {
        return null;
    }  else if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
        return 0;
    } else {
        return (s1+s2+s3)/3;
    }    
}
 
 QUnit.module(" Validation ")
 
 QUnit.test("validations", function (assert) {
    assert.equal(avg(2,2,2), 2, "Given values return expected value");
    assert.equal(avg("","",""), null, "Return null when passed empty string");
    assert.equal(avg("first","second","third"), null, "Return null when passed strings");
    assert.equal(avg(2,-2,3), 0, "Return zero if one of the number passed is less than zero");
    assert.equal(avg("12345", "pratyusha", "abc123"), null, "Return null when a number is passed with a string");
 }); 
  
 