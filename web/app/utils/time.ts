import dayjs from 'dayjs';

export function convertSecondsToFullTime(seconds: number): string {
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime: string[] = [];

  if (days > 0) {
    formattedTime.push(`${days} ${days === 1 ? 'day' : 'days'}`);
  }

  if (hours > 0) {
    formattedTime.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
  }

  if (minutes > 0) {
    formattedTime.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
  }

  if (remainingSeconds > 0) {
    formattedTime.push(`${remainingSeconds} ${remainingSeconds === 1 ? 'second' : 'seconds'}`);
  }

  return formattedTime.join(' ');
}


export function formatTimeToVideo(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours === 0 && minutes < 10) {
    const formattedMinutes = minutes.toString();
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  } else {
    const formattedHours = hours > 0 ? hours.toString() : '';
    const formattedMinutes = minutes > 0 ? minutes.toString().padStart(2, '0') : "00";
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${formattedHours ? formattedHours + ':' : ''}${formattedMinutes}:${formattedSeconds}`;
  }
}