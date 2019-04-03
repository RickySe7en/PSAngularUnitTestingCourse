import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe returns correct value', () => {

    it ('value < 10 returns weak', () => {
        const pipe = new StrengthPipe();
        expect(pipe.transform(8)).toEqual('8 (weak)');
    });

    it ('value 15 returns strong', () => {
        const pipe = new StrengthPipe();
        expect(pipe.transform(15)).toEqual('15 (strong)');
    });

    it ('value 20 returns strong', () => {
        const pipe = new StrengthPipe();
        expect(pipe.transform(20)).toEqual('20 (unbelievable)');
    });
});
