// import { describe, jest } from '@jest/globals';
// import downloadFile from './download-file.mjs';
// import http from 'http';
// import stream from 'stream';

// describe('downloadFile', () => {
//     it('should use get method', async () => {
//         // given
//         const url = 'http://example.com';

//         const mockResponse = new stream.Readable();
//         mockResponse.push(null); // Simule une réponse vide
//         mockResponse.statusCode = 200;
//         mockResponse.headers = {};
//         jest.spyOn(mockResponse, 'on').mockImplementation(function (event, callback) {
//             if (event === 'data') callback(Buffer.from('test')); // Simule des données reçues
//             if (event === 'end') callback(); // Simule la fin du stream
//           });          

//         const spiedGet = jest.spyOn(http, 'get').mockImplementation((_url, callback) => {
//         callback(mockResponse);
//         return { on: jest.fn() };
//         });

//         // when
//         await downloadFile(url);

//         // then
//         expect(spiedGet).toHaveBeenCalledTimes(1);
//     });
// });