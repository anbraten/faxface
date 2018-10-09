DIR="/opt/faxface"
docker run -td \
	--name faxface \
	--restart always \
	-p 80:80 \
	-v $DIR/conf/iaxmodem:/etc/iaxmodem \
	-v $DIR/conf/hylafax:/var/spool/hylafaxplus \
	-v $DIR/bin/FaxDispatch:/var/spool/hylafaxplus/etc/FaxDispatch \
	-v $DIR/app:/app \
	-v $DIR/fax:/fax \
	faxface
