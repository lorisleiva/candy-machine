#!/bin/sh

(cd ./programs/candy-machine-core && cargo build-bpf)
(cd ./programs/candy-guard && cargo build-bpf)
