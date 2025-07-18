import { Content } from "./content";

describe('Notification content', () => {
    // npm run test
    it('should be able to create a notification content', () => {
        const content = new Content('Corvette C8r!')
        expect(content).toBeTruthy();
    });

    // npm run test:watch
    it('should not be able to create a notification content with less than 5 characters', () => {
        expect(() => new Content('C8r')).toThrow();
    });

    it('should not be able to create a notification content with more than 240 characters', () => {
        expect(() => new Content('C8r'.repeat(241))).toThrow();
    });
});


