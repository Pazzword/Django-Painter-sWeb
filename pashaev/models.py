from django.db import models
from parler.models import TranslatableModel, TranslatedFields

class About(TranslatableModel):
    translations = TranslatedFields(
        content=models.TextField()
    )

    def __str__(self):
        return self.safe_translation_getter('content', any_language=True)[:50]

    class Meta:
        verbose_name = "About"
        verbose_name_plural = "Abouts"

class Mod(TranslatableModel):
    translations = TranslatedFields(
        content=models.TextField(),
        content2=models.TextField(),
        content3=models.TextField()
    )

    def __str__(self):
        return self.safe_translation_getter('content', any_language=True)[:50]

    class Meta:
        verbose_name = "Mod"
        verbose_name_plural = "Mods"

class Sign(TranslatableModel):
    translations = TranslatedFields(
        content=models.TextField()
    )

    def __str__(self):
        return self.safe_translation_getter('content', any_language=True)[:50]

    class Meta:
        verbose_name = "Sign"
        verbose_name_plural = "Signs"
