// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_model_service_pb = require('../proto/model_service_pb.js');

function serialize_Grades(arg) {
  if (!(arg instanceof proto_model_service_pb.Grades)) {
    throw new Error('Expected argument of type Grades');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Grades(buffer_arg) {
  return proto_model_service_pb.Grades.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GradesRequest(arg) {
  if (!(arg instanceof proto_model_service_pb.GradesRequest)) {
    throw new Error('Expected argument of type GradesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GradesRequest(buffer_arg) {
  return proto_model_service_pb.GradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ModelService = exports.ModelService = {
  getGrades: {
    path: '/Model/GetGrades',
    requestStream: false,
    responseStream: false,
    requestType: proto_model_service_pb.GradesRequest,
    responseType: proto_model_service_pb.Grades,
    requestSerialize: serialize_GradesRequest,
    requestDeserialize: deserialize_GradesRequest,
    responseSerialize: serialize_Grades,
    responseDeserialize: deserialize_Grades,
  },
};

exports.ModelClient = grpc.makeGenericClientConstructor(ModelService);
