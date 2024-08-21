proto_build :
	mkdir -p ./src/services/proto
	protoc -I=proto -I=momentum-poc-proto momentum-poc-proto/claim/*.proto --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./src/services/proto/
	protoc -I=proto -I=momentum-poc-proto momentum-poc-proto/claim/*.proto --js_out=import_style=commonjs:./src/services/proto/

	protoc -I=proto -I=momentum-poc-proto momentum-poc-proto/patients/*.proto --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./src/services/proto/
	protoc -I=proto -I=momentum-poc-proto momentum-poc-proto/patients/*.proto --js_out=import_style=commonjs:./src/services/proto/

	protoc -I=proto -I=momentum-poc-proto momentum-poc-proto/common/*.proto --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./src/services/proto/
	protoc -I=proto -I=momentum-poc-proto momentum-poc-proto/common/*.proto --js_out=import_style=commonjs:./src/services/proto/

clean :
	rm -r ./src/services/proto/