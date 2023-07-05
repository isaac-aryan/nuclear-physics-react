// NUCLEAR PHYSICS FUNCTIONALITY


// Me = Mass of an electron
// PI = Pi
// h = Plancks Constant
// epsilon = Permativity of free space
// charge = charge on an electron


// Buffer values are the values of the exponent of 10 that indicates the scientific form of the constants. 
// I have set them as a separate variable because they are needed to format the result to it's scientific form

export const Me = 9.109;
export const MeBuffer = -31; 

export const PI = 3.145;

export const h = 6.62607;
export const hBuffer = -34;

export const epsilon = 8.85;
export const epsilonBuffer = -12;

export const charge = 1.6;
export const chargeBuffer = -19;

const radBuffer = -11; //Value of simplifying the exponents of 10 in the radius formula comes to 10^-11

//Result Formatter
function getScientific(value, buff){
    let exponent = Math.floor(Math.log10(Math.abs(value))); 
    let mantissa = value / Math.pow(10, exponent);

    exponent = exponent + buff; //Final value of exponent of 10
    exponent = exponent.toString();

    mantissa = mantissa.toFixed(4);

    return mantissa + ' x 10'+exponent.sup();
}


export function angFromVel(vel, rad){
    let ans = Me * vel * rad;
    return ans;
}

export function angFromQuant(num){
    let ans = (num*h)/(2*PI);
    return ans;
}

// BOHR'S RADIUS
export function getRad(q, z){
    let ans = (q*q)*(h*h)*epsilon;
    ans = ans/((PI * Me * z)*(charge*charge));
    
    let finalAns = getScientific(ans, radBuffer)+' m';
    return finalAns;
}

export function velFromAtom(atom, quant){
    let ans = (atom * charge * charge)/(2*PI*epsilon*h*quant);
    return ans + " x10^8 m/s"; 
}

export function velFromRad(q, r){
    let ans = (q*h)/(2*PI*Me*r);
    return ans+" x10^-22";
}

