FROM node:14.15.3

WORKDIR /home/react/kakao

COPY package*.json ./
RUN npm install

COPY . .

CMD ["create-react-app", "kakao"]

#RUN apt-get -y install npm
#RUN npm install -g create-react-app
#RUN npm install styled-components
#RUN yarn add Musma/react-kakao-maps#0.0.1

#CMD ["create-react-app", "kakao"]