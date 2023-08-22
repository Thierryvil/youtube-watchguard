import { app } from '../../src/main/config/app';
import request from 'supertest';

describe('Search Route Integration Tests', () => {
  it('should response correct', async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [
        900, 7200, 1800, 9000, 1200, 2400, 5400
      ]
    }

    const response = await request(app).post('/search').send(body);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array)
    
  });

  it('should response have propertys', async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [
        900, 7200, 1800, 9000, 1200, 2400, 5400
      ]
    }

    const response = await request(app).post('/search').send(body);
    response.body.forEach(item => {
      expect(item).toHaveProperty('mostUsedWordsInDescriptions');
      expect(item).toHaveProperty('mostUsedWordsInTitles');
      expect(item).toHaveProperty('totalInSecondsToWatchAllVideos');
      expect(item).toHaveProperty('videos');
    });
  });

  it('should mostUsedWordsInDescriptions be a array', async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [
        900, 7200, 1800, 9000, 1200, 2400, 5400
      ]
    }

    const response = await request(app).post('/search').send(body);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array)
    response.body.forEach(item => {
      expect(item).toHaveProperty('mostUsedWordsInDescriptions');
      expect(Array.isArray(item.mostUsedWordsInDescriptions)).toBe(true);
    });
  });

  it('should mostUsedWordsInTitles be a array', async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [
        900, 7200, 1800, 9000, 1200, 2400, 5400
      ]
    }

    const response = await request(app).post('/search').send(body);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array)
    response.body.forEach(item => {
      expect(item).toHaveProperty('mostUsedWordsInTitles');
      expect(Array.isArray(item.mostUsedWordsInTitles)).toBe(true);
    });
  });

  it('should totalInSecondsToWatchAllVideos be a number', async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [
        900, 7200, 1800, 9000, 1200, 2400, 5400
      ]
    }

    const response = await request(app).post('/search').send(body);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array)
    response.body.forEach(item => {
      expect(item).toHaveProperty('totalInSecondsToWatchAllVideos');
      expect(typeof item.totalInSecondsToWatchAllVideos).toBe('number');
    });
  });

  it('should videos be a array', async () => {
    const body = {
      query: "test",
      secondsPerWeekDays: [
        900, 7200, 1800, 9000, 1200, 2400, 5400
      ]
    }

    const response = await request(app).post('/search').send(body);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array)
    response.body.forEach(item => {
      expect(item).toHaveProperty('videos');
      expect(Array.isArray(item.videos)).toBe(true);
    });
  });

  it('should return status code 404 for missing query in body', async () => {
    const body = {
      secondsPerWeekDays: [
        900, 7200, 1800, 9000, 1200, 2400, 5400
      ]
    }
  
    const response = await request(app).post('/search').send(body);
  
    expect(response.status).toBe(404);
  })
    
    it('should return status code 404 for missing secondsPerWeekDays in body', async () => {
      const body = {
        query: "test",
      }
  
      const response = await request(app).post('/search').send(body);
  
      expect(response.status).toBe(404);
    })
  });