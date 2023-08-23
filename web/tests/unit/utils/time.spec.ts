import { convertSecondsToFullTime, formatTimeToVideo } from "@/app/utils";

const seconds = 60

describe('ConvertSecondsToFullTime', () => {
  it('should be return correct time in minutes', () => {
    expect(convertSecondsToFullTime(seconds * 1)).toBe("1 minute")
    expect(convertSecondsToFullTime(seconds * 10)).toBe("10 minutes")
  })

  it('should be return correct time in seconds', () => {
    expect(convertSecondsToFullTime(seconds / seconds)).toBe("1 second")
    expect(convertSecondsToFullTime(seconds / 2)).toBe("30 seconds")
  })

  it('should be return correct time in hour', () => {
    expect(convertSecondsToFullTime(seconds * 60)).toBe("1 hour")
  })

  it('should be return correct time in hour, minute and seconds', () => {
    expect(convertSecondsToFullTime(4210)).toBe("1 hour 10 minutes 10 seconds")
  })

});

describe('Utils FormatTimeToVideo', () => {
  it('should be return correct time with seconds', () => {
    expect(formatTimeToVideo(seconds / 2)).toBe("0:30")
    expect(formatTimeToVideo(seconds / seconds)).toBe("0:01")
  })

  it('should be return correct time with minute', () => {
    expect(formatTimeToVideo(seconds)).toBe("1:00")
    expect(formatTimeToVideo(seconds * 10)).toBe("10:00")
  })

  it('should be return correct time with minute and seconds', () => {
    expect(formatTimeToVideo(seconds + 1)).toBe("1:01")  
    expect(formatTimeToVideo(seconds + 10)).toBe("1:10")  
  })
  
  it('should be return correct time with hour', () => {
    expect(formatTimeToVideo(seconds * seconds)).toBe("1:00:00")  
  })

  it('should be return correct time with hour and minute', () => {
    expect(formatTimeToVideo(seconds * seconds + seconds)).toBe("1:01:00")  
  })
  
  it('should be return correct time with hour, minute and seconds', () => {
    expect(formatTimeToVideo(4210)).toBe("1:10:10") 
  })
});