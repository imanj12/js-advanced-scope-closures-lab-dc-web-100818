function produceDrivingRange (range) {
  return function (start, end) {
    let startNum = parseInt(start.split('th')[0])
    let endNum = parseInt(end.split('th')[0])
    let diff = endNum - startNum
    if (diff > range) {
      return `${diff - range} blocks out of range`
    } else if (diff < range) {
      return `within range by ${range - diff}`
    }
  }
}

function produceTipCalculator (tip) {
  return function (fare) {
    return tip * fare
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
