declare namespace core {
    namespace utils {
        function setCookieValue(key: string, value: string, expireDate?: Date, path?: string): void;
        function getCookieValue(key: string): string;
        function deleteCookie(key: string, path: string): void;
    }

    namespace security {

    }

    namespace auth {
        function getToken(tokenKey: string) : string;
        function setToken(tokenKey: string, authToken: string, expireDate?: Date): void;
    }

    namespace ui {
        function owlCarousel(action: tring): void;
        function popup(): void;

        function openModal(modalKey: string): void;
        function closeModal(modalKey: string): void;
        function calcHeight(): void;
    }
}
